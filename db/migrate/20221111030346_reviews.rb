class Reviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :reviewer, null: false, foreign_key: {to_table: :users}
      t.references :item, null: false, foreign_key: {to_table: :items}
      t.references :parent_review, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.float :rating, null: false
      t.timestamps
    end
  end
end
