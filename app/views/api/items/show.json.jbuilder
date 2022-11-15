json.extract! @item, :id, :name, :price, :description, :details, :department, :created_at, :updated_at

json.set! :photoUrl, @item.photo.url


json.reviews do
    @item.reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :id, :reviewer_id, :item_id, :title, :body, :rating, :created_at
        end
    end
end