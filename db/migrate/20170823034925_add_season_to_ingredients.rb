class AddSeasonToIngredients < ActiveRecord::Migration[5.1]
  def change
    add_column :ingredients, :season, :string
  end
end
