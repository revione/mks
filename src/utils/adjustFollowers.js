export default function adjustFollowers(followers) {
  if (Number(followers) >= 11000) {
    return followers.toString().slice(0, 2) + 'k'
  }
  return followers.toString()
}
