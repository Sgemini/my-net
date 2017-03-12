class CatesIngredientsMap < ActiveRecord::Base
  belongs_to :cates
  belongs_to :ingredients
end
