class OneAddColums < ActiveRecord::Migration[5.1]
  def change
    add_column :cates, :steps, :string, array: true, default: []
    add_column :cates, :nutrition, :string
    add_column :cates, :taste, :string
    add_column :cates, :faction, :string
    rename_column :cates, :title, :name
    add_column :ingredients, :origin, :string
    remove_column :ingredients, :diet
  end
end
