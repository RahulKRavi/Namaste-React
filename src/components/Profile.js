import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo : {
                name: "Dummy Name",
            }
        }
        console.log("Constructor Loaded")

    }
    async componentDidMount(){
        const githubData = await fetch("https://api.github.com/users/rahulkravi");
        const jsonGithubData = await githubData.json();
        this.setState({
            userInfo:jsonGithubData
        })
        console.log(jsonGithubData)
        console.log("Yes it did mount")
    }
    componentDidUpdate(){

    }
    componentWillUnmount(){

    }
    render() {
        const {name,img} = this.state.userInfo
        return (
            <div className="profile-box">
                <b>{name}</b>
                <img src={this.state.userInfo.avatar_url}></img>
            </div>
        )

    }
}

export default Profile;