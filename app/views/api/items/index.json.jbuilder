@items.each do |item|
    json.set! item.id do
        json.extract! item,
        :id,
        :name,
        :price,
        :description,
        :details,
        :department
    end
end