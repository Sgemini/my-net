class Ingredient < ActiveRecord::Base
  has_many :cates, through: :cates_ingredients_map
end
