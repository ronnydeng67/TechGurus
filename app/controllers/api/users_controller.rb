class Api::UsersController < ApplicationController

  wrap_parameters include: User.attribute_names + ['password']

  def index 
    @users = User.all
    render :index
  end

  def create
    @user = User.find_by(email: params[:email])
    if @user
      render json: { errors: ["Sorry, something went wrong. Please try again."] }, status: :unprocessable_entity
    else
      @user = User.new(user_params)
      @user.save
      login!(@user)
      render :show
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else 
      render json: { errors: ["Sorry, something went wrong. Please try again."] }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end
