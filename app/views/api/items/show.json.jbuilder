json.extract! @item, :id, :name, :price, :description, :details, :department, :created_at, :updated_at

json.set! :photoUrl, @item.photo.url
