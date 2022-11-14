enum Memberships {
	Simple,
	Standard,
	Premium
}

// const membership = Memberships
// console.log(membership.Standard) // Show us the index of Standard in [ enum Memberships ] (1)

// const membership = Memberships
// console.log(membership[1])

enum SocialMedia {
	VK = 'VK',
	FACEBOOK = 'FACEBOOK',
	INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)