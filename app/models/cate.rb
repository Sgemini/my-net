class Cate < ActiveRecord::Base
  has_many :cates_ingredients_maps
  has_many :ingredients, through: :cates_ingredients_maps
  has_one :vote
end
