json.bench do
    json.extract! @bench, :id, :name, :price, :desciption, :department, :created_at, :updated_at
end