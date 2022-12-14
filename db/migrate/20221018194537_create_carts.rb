class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.references :user, null: false, foreign_key: {to_table: :users}
      t.references :item, null: false, foreign_key: {to_table: :items}
      t.integer :quantity, null: false
      t.timestamps
    end
  end
end
