class Ingredient < ActiveRecord::Base
  has_many :cates_ingredients_maps
  has_many :cates, through: :cates_ingredients_maps
end
