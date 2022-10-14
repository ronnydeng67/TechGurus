json.items do
    @items.each do |item|
        json.set! item.id do
            json.extract! item
            :id,
            :name,
            :price,
            :desciption,
            :department
        end
    end
end