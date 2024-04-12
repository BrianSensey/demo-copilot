function skillsMember() {
    // console.log("skillsMember");
    let member = document.getElementById('member');
    let memberDiv = document.createElement('div');
    memberDiv.setAttribute('class', 'memberDiv');
    memberDiv.setAttribute('id', 'memberDiv');
    member.appendChild(memberDiv);

    let memberH2 = document.createElement('h2');
    memberH2.setAttribute('class', 'memberH2');
    memberH2.setAttribute('id', 'memberH2');
    memberH2.innerText = 'Member';
    memberDiv.appendChild(memberH2);

    let memberP = document.createElement('p');
    memberP.setAttribute('class', 'memberP');
    memberP.setAttribute('id', 'memberP');
    memberP.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    memberDiv.appendChild(memberP);
}