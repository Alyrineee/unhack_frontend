import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import apiClient from "../apiClient";

const CreateHackathon = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    diff: "E",
    date_of_start: "",
    date_of_end: "",
    place: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    date_of_start: "",
    date_of_end: "",
    place: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await apiClient.get("/api/user");
        setUser(response.data);
        if (!response.data.is_organizer) {
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        navigate("/login");
      }
    };

    fetchUser();
  }, [navigate]);

  const validateForm = () => {
    const newErrors = {
      name: "",
      description: "",
      date_of_start: "",
      date_of_end: "",
      place: "",
    };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.description) {
      newErrors.description = "Description is required.";
      isValid = false;
    }

    if (!formData.date_of_start) {
      newErrors.date_of_start = "Start date is required.";
      isValid = false;
    }

    if (!formData.date_of_end) {
      newErrors.date_of_end = "End date is required.";
      isValid = false;
    }

    if (!formData.place) {
      newErrors.place = "Place is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await apiClient.post("/api/hackatons/", formData);

      if (response.status === 201) {
        navigate("/hackathons");
      }
    } catch (error) {
      console.error("Error creating hackathon:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Hackathon
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputBox
              type="text"
              placeholder="Hackathon Name"
              name="name"
              onChange={handleInputChange}
              error={errors.name}
            />
            <InputBox
              type="text"
              placeholder="Description"
              name="description"
              onChange={handleInputChange}
              error={errors.description}
            />
            <InputBox
              type="date"
              placeholder="Start Date"
              name="date_of_start"
              onChange={handleInputChange}
              error={errors.date_of_start}
            />
            <InputBox
              type="date"
              placeholder="End Date"
              name="date_of_end"
              onChange={handleInputChange}
              error={errors.date_of_end}
            />
            <InputBox
              type="text"
              placeholder="Place"
              name="place"
              onChange={handleInputChange}
              error={errors.place}
            />

            <div className="flex gap-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="diff"
                  value="E"
                  checked={formData.diff === "E"}
                  onChange={handleInputChange}
                />
                <span className="ml-2">Easy</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="diff"
                  value="M"
                  checked={formData.diff === "M"}
                  onChange={handleInputChange}
                />
                <span className="ml-2">Medium</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="diff"
                  value="H"
                  checked={formData.diff === "H"}
                  onChange={handleInputChange}
                />
                <span className="ml-2">Hard</span>
              </label>
            </div>

            <Button text="Create Hackathon" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateHackathon;
