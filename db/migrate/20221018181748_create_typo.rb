class CreateTypo < ActiveRecord::Migration[7.0]
  def change
    rename_column :items, :desciption, :description
    rename_column :items, :detail, :details
  end
end
