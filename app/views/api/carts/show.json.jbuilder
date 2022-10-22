# debugger
if @cart.is_a?(Array)
    @cart.each do |itemm|
        json.extract! itemm, :id, :user_id, :item_id, :quantity
    end
else    
    @cart
    json.extract! @cart, :id, :user_id, :item_id, :quantity

    # debugger
    json.price @cart.item.price
    json.photo_url url_for(@cart.item.photo)

end