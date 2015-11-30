class MessagesController < ApplicationController
  def index
    @messages = Message.all.order(created_at: :desc)
  end

  def create
    @message = Message.create(message_params) do |message|
      message.user = current_user
    end
  end

  private

  def message_params
    params.require(:message).permit(:text)
  end
end
