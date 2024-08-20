import React from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon  from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon  from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Post() {
  return (
    <div className='post'>
        <div className='post__header'>
            <div className='post__headerAuthor'>
            <Avatar>M</Avatar>
            Mujah_. <span>12h</span>
            </div>
            
            <MoreHoriz />

        </div>
        <div className='post__image'>
            <img src='https://m.media-amazon.com/images/I/51XepNtLaKL._AC_UF1000,1000_QL80_.jpg' />
        </div>
        <div className='post__footer'>
            <div className='post__footerIcons'>
                <div className='iconsMain'>
                    <FavoriteBorderIcon className='postIcon'/>
                    <ChatBubbleOutlineIcon className='postIcon'/>
                    <TelegramIcon className='postIcon'/>
                </div>
                <div className='post__iconSave'>
                    <BookmarkBorderIcon className='postIcon'/>
                </div>
            </div>
            Liked by 20 people.
        </div>
    </div>
  )
}

export default Post