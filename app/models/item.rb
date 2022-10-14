# == Schema Information
#
# Table name: items
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  price      :float            not null
#  desciption :text             not null
#  detail     :text             not null
#  department :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Item < ApplicationRecord
    validate :name, :price, :desciption, :detail, :department


end
