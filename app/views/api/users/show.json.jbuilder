json.extract! @user, :id, :name, :email, :created_at, :updated_at


json.carts do
    @user.carts.each do |cart|
        json.set! cart.id do
            json.extract! cart, :id, :user_id, :item_id, :quantity, :created_at
        end
    end
end