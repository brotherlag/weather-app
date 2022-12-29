import Form from 'react-bootsrap/Form';
import Button from 'react-bootstrap/Button';
import { getWeather } from '../services/apiService';

function SearchForm(defaultProps) {

    const units = [
        'standard',
        'metric',
        'imperial',
    ];

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'fi', label: 'Finnish' },
        { code: 'ru', label: 'Russian' },
        { code: 'swe', label: 'Swedish' },
        { code: 'zh_cn', label: 'Chineese Simplified' },
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event);

        const data = {
            lat: event.target.lat.value,
            lon: event.target.lon.value,
            units: event.target.unit.value,
            lang: event.targte.lang.value,
        };
        
        const weather = await getWeather();
        const response = await weather.json();
        console.log('response', response);
        console.log(data);

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
                <Form.Label>Latitude</Form.Label>
                <Form.Control type="text" name="lat" placeholder="41.92734" defaultValue={defaultProps.lat} />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Longetude</Form.Label>
                <Form.Control type="text" name="lon" placeholder="2.179934" defaultValue={defaultProps.lon} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Units of measurement</Form.Label>
                {units.map((unit, i) => (
                    <Form.Check
                        type="radio"
                        id={unit}
                        label={unit}
                        key={unit}
                        name="units"
                        value={unit}
                        defaultChecked={defaultProps.unit === unit}
                    />
                ))}
            </Form.Group>
            <Form.Group className="my-4">
                <Form.Label>Languge</Form.Label>
                <Form.Select name="lang" defaultValue={defaultProps.lang}>
                    {languages.map((language, i) => (
                        <option key={language.code} value={language.code}>{language.label}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

SearchForm.defaultProps = {
    lat: '58.5953',
    lon: '25.0136',
    unit: 'metric',
    lang: 'en',
};

export default SearchForm;