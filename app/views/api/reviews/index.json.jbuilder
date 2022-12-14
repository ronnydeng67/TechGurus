@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :id, :reviewer_id, :item_id, :rating, :title, :body, :created_at
    end
end