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
    validates :reviewer_id, :item_id, :title, :body, presence: true
    validates :body, length: { in: 0..255 }
    validates :rating, inclusion: { in: 1..5 }, presence: true

    belongs_to :user, optional: true
    belongs_to :item
    belongs_to :parent_review,
        foreign_key: :parent_review_id,
        class_name: :Review,
        optional: true

    has_many :children_reviews,
        foreign_key: :parent_review_id,
        class_name: :Review,
        dependent: :destroy

end
