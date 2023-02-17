import { useState, useEffect } from 'react'; 
import { ListGroup, Card, Button, Form } from 'react-bootstrap'; 
import API from "./API"; 

const AddPhoto = ({ onAdd }) => {
    const [type, setType] = useState("");
    const [locationCity, setLocationCity] = useState(""); 
    const [locationCountry, setLocationCountry] = useState(""); 
    const [title, setTitle] = useState(""); 
    const [cameraMake, setCameraMake] = useState("");
    const [cameraModel, setCameraModel] = useState(""); 
    const [format, setFormat] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [yearTaken, setYearTaken] = useState(""); 
    const [lensMake, setLensMake] = useState(""); 
    const [lensModel, setLensModel] = useState(""); 
    const [focalLength, setFocalLength] = useState(""); 
    const [photoId, setPhotoId] = useState(null); 
    const [photos, setPhotos] = useState([]); 

    useEffect(() => {
        refreshPhotos();
    }, []); 

    const refreshPhotos = () => {
        API.get("/")
        .then((res) => {
            setPhotos(res.data); 
            // setType(res[0].type)
            // setLocationCity(res[0].location_city)
            // setLocationCountry(res[0].location_country)
            // setTitle(res[0].title)
            // setCameraMake(res[0].camera_make) 
            // setCameraModel(res[0].camera_model) 
            // setFormat(res[0].format) 
            // setDescription(res[0].description) 
            // setYearTaken(res[0].year_taken) 
            // setLensMake(res[0].lens_make)
            // setLensModel(res[0].lens_model) 
            // setFocalLength(res[0].focal_length) 
            // setPhotoId(res[0].id) 
        })
        .catch(console.error); 
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let item = { type, locationCity, locationCountry, title, cameraMake, cameraModel, format, description, yearTaken, lensMake, lensModel, focalLength };
        API.post("/", item).then(() => refreshPhotos());
    };

    const onUpdate = (id) => {
        let item = { title };
        API.patch(`/${id}`, item).then((res) => refreshPhotos()); 
    };

    const onDelete = (id) => {
        API.delete(`/${id}`).then((res) => refreshPhotos()); 
    }; 

    function selectPhoto(id) {
        let item = photos.filter((photo) => photo.id === id)[0];
        setType(item.type);
        setLocationCity(item.location_city);
        setLocationCountry(item.location_country);
        setTitle(item.title); 
        setCameraMake(item.camera_make);
        setCameraModel(item.camera_model);
        setFormat(item.format);
        setDescription(item.description);
        setYearTaken(item.year_taken);
        setLensMake(item.lens_make);
        setLensModel(item.lens_model);
        setFocalLength(item.focal_length);
        setPhotoId(item.id); 
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className='col-md-4'>
                    <h3 className='float-left'>Create a new Photo</h3>
                    <Form onSubmit={onSubmit} className="mt-4">
                        <Form.Group className="mb-3" controlId="formBasicType">
                            <Form.Label>{photoId}Type</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter Photo Type"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter City"
                                value={locationCity}
                                onChange={(e) => setLocationCity(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter Country"
                                value={locationCountry}
                                onChange={(e) => setLocationCountry(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Photo Title</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCameraMake">
                            <Form.Label>Camera Make</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter Camera Make"
                                value={cameraMake}
                                onChange={(e) => setCameraMake(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCameraModel">
                            <Form.Label>Camera Model</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter Camera Model"
                                value={cameraModel}
                                onChange={(e) => setCameraModel(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicFormat">
                            <Form.Label>Format</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter Camera Format"
                                value={format}
                                onChange={(e) => setFormat(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter Photo Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicYear">
                            <Form.Label>Date Taken</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter Date Photo Taken"
                                value={yearTaken}
                                onChange={(e) => setYearTaken(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicLensMake">
                            <Form.Label>Lens Make</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter Lens Make"
                                value={lensMake}
                                onChange={(e) => setLensMake(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicLensModel">
                            <Form.Label>Lens Model</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter Lens Model"
                                value={lensModel}
                                onChange={(e) => setLensModel(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicFocalLength">
                            <Form.Label>Focal Length</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter Lens Focal Length"
                                value={focalLength}
                                onChange={(e) => setFocalLength(e.target.value)}
                            />
                        </Form.Group>

                        <div className="float-right">
                            <Button 
                                variant="primary" 
                                type="submit" 
                                onClick={onSubmit} 
                                className="mx-2" 
                            >
                                Save
                            </Button>
                            <Button
                                variant="primary"
                                type="button"
                                onClick={() => onUpdate(photoId)}
                                className='mx-2'
                            >
                                Update 
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="col-md-8 m">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Photo Title</th>
                                <th scope="col">Photo Type</th>
                                <th scope="col">Photo Location</th>
                                <th scope="col">Camera Used</th>
                                <th scope="col">Lens Used</th>
                                <th scope="col">Date Taken</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {photos.map((photo, index) => {
                                return (
                                    <tr key="">
                                        <th scope="row">{photo.id}</th>
                                        <td>{photo.title}</td>
                                        <td>{photo.type}</td>
                                        <td>{photo.location_city}, {photo.location_country}</td>
                                        <td>{photo.camera_make}, {photo.camera_model}</td>
                                        <td>{photo.lens_make}, {photo.lens_model}</td>
                                        <td>{photo.year_taken}</td>
                                        <td>{photo.description}</td>
                                        <td>
                                            <i
                                                className="fa fa-pencil-square text-primary d-inline"
                                                aria-hidden="true" 
                                                onClick={() => selectPhoto(photo.id)}
                                            ></i>
                                            <i
                                                className="fa fa-trash-o text-danger d-inline mx-3" 
                                                aria-hidden="true"
                                                onClick={() => onDelete(photo.id)}
                                            ></i>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddPhoto; 