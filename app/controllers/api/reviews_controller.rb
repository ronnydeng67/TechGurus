class Api::ItemsController < ApplicationController

    def index
        item = Review.find_by(id: params[:item_id])
        @reviews = item.reviews
        render :index
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: {errors: @review.errors.full_messages}, status: 422
    end

    def destroy
        @reivew = Review.find(params[:id])
        if @review
            @review.destroy
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update 
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            render: show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show
        @review = Review.find_by(id: parms[:id])
        render :show
    end

    def review_params
        params.require(:review).permit(:title, :body, :rating, :reviewer_id, :item_id)
    end
end