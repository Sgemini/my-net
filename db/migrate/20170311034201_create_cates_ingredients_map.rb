class CreateCatesIngredientsMap < ActiveRecord::Migration[5.0]
  def change
    create_table :cates_ingredients_maps do |t|
      t.integer :cate_id
      t.integer :ingredient_id
    end
  end
end
