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
    validates :item_id, :title, :body, presence: true
    validates :body, length: { in: 0..255 }
    validates :rating, inclusion: { in: 1..5 }, presence: true
    validates :reviewer_id, :uniqueness => { :scope => :item_id, :message => "You may only leave one review per item." }

    belongs_to :item
    belongs_to :reviewer,
        foreign_key: :reviewer_id,
        class_name: :User
        
    belongs_to :parent_review,
        foreign_key: :parent_review_id,
        class_name: :Review,
        optional: true

    has_many :children_reviews,
        foreign_key: :parent_review_id,
        class_name: :Review,
        dependent: :destroy

end
