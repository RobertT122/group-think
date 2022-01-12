import React from 'react'
import '../modal/modal.css'
import { ReactComponent as Logo } from '../svgs/groupThinkLogo.svg';

export default function Tutorial() {
    return (
        <div className="modal-tutorial-container">
            <div className='modal-header'>
                Welcome to GroupThink
            </div>
            <div className='logo-container'>
            
            </div>
            <div className='brief-container'>The following is a tutorial to guide our new users through the GroupThink experience</div>
            <div className='explain-profile-container'>
                <img 
                    src="https://lh3.googleusercontent.com/350c_qDTsqsIh5hsrkVi0NWvK9hpqobsXDnlcQ7IOtEH6r6D2QoxqLoRjqw74upsK4kwlRUy5k0PWhG8s1mM4Ly2iztyuFydPgRW98pyz3BICW95Tu1Fker2av_U0MivkvT_xm37Sg=w2400" 
                    alt="" 
                />
                <p className='explain-txt'>
                    The user profile interface shows the user icon, username, occupation (if given), and the GroupThink score.  
                </p>
            </div>
            <div className='explain-profile-container'>
                <img 
                    src="https://lh3.googleusercontent.com/_LTkb8S2UvVXGYqvJLMauqCrJ9m9_ArcBblCLW8X88aJhNRldXQivEucy8lQLYjUhKQGPveQK9-TMwdTFevRqo5pfl2Dau_5CHfCDYwXTSJkqWjEWP-QVEBZAlH3oF5puLa0L6qiMg=w2400" 
                    alt="" 
                />
                <p className='explain-txt'>
                    The question form allows users to post questions that are then answered by others.
                </p>
            </div>
            <div className='explain-profile-container'>
                <img 
                    src="https://lh3.googleusercontent.com/Suw8GEMZiA12JTNW_N7NVcyRl9wjZCX3JYLJj4jfLBEv0j0-4zBSSEXNaSTXB_bH7q8AfumuksdiEtz8hF8E_ssZ4W7kpuwu-b3B4Q7l_ItzgBq05m1A7WrhjxlG3feHw_GMJCMVdg=w2400" 
                    alt="" 
                />
                <p className='explain-txt'>
                    The question feed shows all of the questions, you've posted and, once a question is closed, that particular question's responses. There're also the options to re-open and delete questions.
                </p>
            </div>
            <div className='explain-profile-container'>
                <img 
                    src="https://lh3.googleusercontent.com/ZhlLYS2vWI8AimJMS13yu-ZrOXNV4cxMe7LlznM1k5LlTU1Bn8jMsIfp1-or7KS1Vfkp4Q-Xh7To_DYg6krUbxh4t1Wr6JYP0YOljIoQyNv8HmE12DSRUTSIcY8Hsfi9YJqoKvzWWA=w2400" 
                    alt="" 
                />
                <p className='explain-txt'>
                    The answering button will redirect you to the answering page, where you will answer others' questions. Please answer carefully. Big brother is watching.  
                </p>
            </div>
        </div>
    )
}
