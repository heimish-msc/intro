const profileData = {
  name: 'Yeonwoo Seo',
  contact: '+82-10-7399-0709',
  email: 'comp.yeonwoo@gmail.com',
  instagram: '@heimish_msc',
  bio: 'Korean Composer, musician, and teacher'
};

export function ProfileContent() {
  return (
    <section className="profile-content">
      <h2 className="page-title">Profile</h2>

      <div className="profile-card">
        <img src="/src/profile.png" alt="Profile photo" className="profile-photo-placeholder" aria-label="Profile photo placeholder" />

        <div className="profile-details">
          <h2 className="profile-name">{profileData.name}</h2>
          <p className="profile-meta">
            <span className="profile-meta-label">Contact</span>
            <span>{profileData.contact}</span>
          </p>
          <p className="profile-meta">
            <span className="profile-meta-label">Email</span>
            <span>{profileData.email}</span>
          </p>
          <p className="profile-meta">
            <span className="profile-meta-label">Instagram</span>
            <span>{profileData.instagram}</span>
          </p>
          <p className="profile-bio">{profileData.bio}</p>
        </div>
      </div>
    </section>
  );
}
