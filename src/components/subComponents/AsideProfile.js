import React, { Component } from 'react'

export default class AsideProfile extends Component {
    render() {
        return (
            <div>
                <div className="profile-aside">

                        <div className="profile-avatar">
                        </div>
                            <p className="name-aside-first">Jahangir Alam Jisan</p>
                            <p className="name-aside-second">UX Designer</p>
                        <div className="class-profile-foto1">
                            <a href="/profile" className="a-profile-foto1"><i className="user icon"></i></a>
                        </div>
                        <div className="class-profile-foto2">
                            <a href="/editing" className="a-profile-foto2"><i className="edit icon"></i></a>
                        </div>
                        <div className="class-profile-foto3">
                            <a href="/logout" className="a-profile-foto3"><i className="sign out alternate icon"></i></a>
                        </div>

                    </div>
            </div>
        )
    }
}
