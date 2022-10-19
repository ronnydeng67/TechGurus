# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  item_id    :bigint           not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Cart < ApplicationRecord
    validates :user_id, :item_id, :quantity, presence: true

    belongs_to :user
    belongs_to :item
end
