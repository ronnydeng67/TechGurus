# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  reviewer_id :bigint           not null
#  item_id     :bigint           not null
#  title       :string           not null
#  body        :text             not null
#  rating      :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
end
