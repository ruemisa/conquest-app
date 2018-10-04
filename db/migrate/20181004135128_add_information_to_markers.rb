class AddInformationToMarkers < ActiveRecord::Migration[5.2]
  def change
    add_column :markers, :information, :text
  end
end
