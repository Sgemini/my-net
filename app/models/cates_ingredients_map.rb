class CatesIngredientsMap < ActiveRecord::Base
  belongs_to :cate
  belongs_to :ingredient
end
