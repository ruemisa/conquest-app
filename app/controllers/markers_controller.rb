class MarkersController < ApplicationController

  def create 
    marker = Marker.create!(marker_params)
  end

  def destroy
    marker = Marker.find(params[:id])
    marker.destroy
  end

  private 

  def marker_params 
    params.require(:marker).permit(:lat, :lng, :information, :user_id)
  end 
end
