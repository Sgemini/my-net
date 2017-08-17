class CreateIngredient < ActiveRecord::Migration[5.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :nutrition
      t.integer :cate_id
      t.string :diet
      t.string :match

      t.timestamps
    end
  end
end
