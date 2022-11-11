@items.each do |item|
    json.set! item.id do
        json.extract! item,
        :id,
        :name,
        :price,
        :description,
        :details,
        :department
        
        json.photo_url url_for(item.photo)
    end
end

