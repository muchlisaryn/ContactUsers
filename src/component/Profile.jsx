import "../Pages/Users/UserPages.css"

export default function Profile ({img}) {
    return (
        <div>
            <div className="profil-img d-flex align-items-center justify-content-center text-light fs-1">{img}</div>
            <div>ID</div>
            <div>name</div>
            <div>username</div>
            <div>email</div>
            <div>address
                <div>street</div>
                <div>suite</div>
                <div>city</div>
                <div>Zipcode</div>
            </div>
            <div>phone</div>
            <div>website</div>
            <div>company</div>
        </div>
    )
}