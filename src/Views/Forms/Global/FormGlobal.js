import React from 'react'

const FormGlobal = () => {

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        bio: "",
        version: "16.8",
        level: "master",
        hooks: true,

    })

    function handleChange(evt) {
        const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setFormData({
            ...formData,
            [evt.target.name]: value
        });
    }

    console.log(formData)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <label>
                            First name
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Last name
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Bio
                            <textarea name="bio" value={formData.bio} onChange={handleChange} />
                        </label>
                        <label>
                            Favorite version
                            <select name="version" onChange={handleChange} value={formData.version}>
                                <option value="16.8">v16.8.0</option>
                                <option value="16.7">v16.7.0</option>
                                <option value="16.6">v16.6.0</option>
                                <option value="16.5">v16.5.0</option>
                            </select>
                        </label>
                        <div>
                            Level
                            <label>
                                Acolyte
                                <input
                                    type="radio"
                                    name="level"
                                    value="acolyte"
                                    checked={formData.level === "acolyte"}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Master
                                <input
                                    type="radio"
                                    name="level"
                                    value="master"
                                    checked={formData.level === "master"}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                With hooks
                                <input
                                    type="checkbox"
                                    name="hooks"
                                    checked={formData.hooks}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormGlobal
