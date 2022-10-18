class CartsController < ApplicationController
    # before_action :require_logged_in

    def index
        @cart = current_user.carts
        render "api/items/index"
    end

    def create
        @cart = Cart.new(car_params)
        if @cart.save
            render :show
        else
            render json: {errors: @cart.errors.full_messages}, status: 422
        end
    end

    def update
        @cart = Cart.find(params[:cart][:item_id])
        if @cart.update(cart_params) && @cart
            render :show
        else
            render json: {errors: @cart.errors.full_messages}, status: 422
        end
    end

    def show
        @cart = Cart.find(params[:id])
        render :show
    end

    def destroy
        @cart = Cart.find(params[:id])
        @cart.destroy
        render :show
    end

    private
    
    def cart_params
        params.require(:cart).permit(:item_id, :user_id, :quantity)
    end
end
