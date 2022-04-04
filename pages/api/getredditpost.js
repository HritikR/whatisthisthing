import axios from 'axios'
export async function getRedditPost(after = ''){
    let url = `https://www.reddit.com/r/whatisthisthing/new.json?after=${after}`
    const { data } = await axios.get(url)
    return data;
}

export async function getRedditAnswer(postAuthor, link, status){
    let url = `https://www.reddit.com${link}search.json?q=Solved!&&restrict_sr=on`
    const { data } = await axios.get(url)
    const comments = data[1].data.children;
    let markedAns = ["NAF"];
    let allAns = [];
    let upVotes = [];
    let i = 0;
    let x = 0;
    comments.map((comment)=>{
        let currentComment = comment.data;
        let replies = comment.data.replies;
        if(replies != ""){
            replies.data.children.map((reply)=>{
                if(reply.data.author == postAuthor && reply.data.body.includes("Solved!")){
                    markedAns[i] = currentComment.body
                    i++;
                }
                {
                    allAns[x] = currentComment.body
                    upVotes[x] = currentComment.ups
                    x++;
                }
            });
        }
    })
    const max = Math.max(...upVotes);
    const index = upVotes.indexOf(max);
    let probably = [`**Possible Answer:** ${allAns[index]}`]
    let answer = [`**Answer:** ${markedAns[0]}`]
    return (markedAns[0] == "NAF") ? ((probably[0] === "**Possible Answer:** undefined") ? probably = ["Detectives are still investigating the details related to the post. 🕵️‍♂️"] : probably) : answer;
}