class Cate < ActiveRecord::Base
  has_many :ingredients, through: :cates_ingredients_map
end
