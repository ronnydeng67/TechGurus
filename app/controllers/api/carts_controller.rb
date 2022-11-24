class Api::CartsController < ApplicationController
    # before_action :require_logged_in
    wrap_parameters include: Cart.attribute_names + ["userId", "itemId"]


    def index
        @carts = current_user.carts
        render :index
    end

    def create
        @cart = Cart.find_by(item_id: params[:item_id], user_id: params[:user_id])
        
        if @cart
            if @cart.quantity == 10
                render json: {errors: ["nonono"]}
            else
                @cart.quantity += 1
            end
        else
            @cart = Cart.new(cart_params)
        end
        
        if @cart.save
            render :show
        else
            render json: {errors: @cart.errors.full_messages}, status: 422
        end
    end

    def update
        @cart = Cart.find(params[:id])
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

    def destroy_cart
        @cart = Cart.where(user_id: params[:user_id]).destroy_all
        # debugger
        render :show
    end

    private
    
    def cart_params
        params.require(:cart).permit(:item_id, :user_id, :quantity)
    end
end
