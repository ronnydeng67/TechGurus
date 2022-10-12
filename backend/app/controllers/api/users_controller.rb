class Api::UsersController < ApplicationController

  wrap_parameters include: User.attribute_names + ['password']

  def create
    @user = User.new(user_params)
    # debugger
    if @user.save
      # debugger
      login!(@user)
      render :show
    else
      # render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
      render json: { errors: ["Sorry, something went wrong. Please try again."] }, status: :unprocessable_entity
    end
  end


  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end
