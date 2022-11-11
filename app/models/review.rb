# == Schema Information
#
# Table name: reviews
#
#  id               :bigint           not null, primary key
#  reviewer_id      :bigint           not null
#  item_id          :bigint           not null
#  parent_review_id :bigint           not null
#  title            :string           not null
#  body             :text             not null
#  rating           :float            not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Review < ApplicationRecord
    validates :reviewer_id, :item_id, :title, :body, :rating, presence: true
    validates :body, length: { in: 0..255 }

    belongs_to :reviewer
    belongs_to :item
    belongs_to :parent_comment,
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        optional: true

    has_many :children_comment,
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        dependent: :destroy

end
