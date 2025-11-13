import { schoolRepository } from "../repositories/schoolRepository";

export const schoolService = {
  async fetchSchoolProfile() {
    try {
      const profile = await schoolRepository.getSchoolProfile();
      
      // Add formatting or additional logic if needed
      return {
        ...profile,
        establishedYear: profile.established,
        fullAddress: profile.address,
        contactInfo: {
          phone: profile.phone,
          email: profile.email
        }
      };
    } catch (err) {
      console.error("Error fetching school profile:", err);
      throw new Error("Gagal memuat profil sekolah");
    }
  },

  async fetchTeachers() {
    try {
      const teachers = await schoolRepository.getTeachers();
      
      // Add formatting or additional logic if needed
      return teachers.map(teacher => ({
        ...teacher,
        fullName: teacher.name,
        specialty: teacher.subject,
        qualification: teacher.education,
        yearsOfExperience: teacher.experience,
        photoUrl: teacher.image
      }));
    } catch (err) {
      console.error("Error fetching teachers:", err);
      throw new Error("Gagal memuat daftar guru");
    }
  },

  async fetchFacilities() {
    try {
      const facilities = await schoolRepository.getFacilities();
      
      // Add formatting or additional logic if needed
      return facilities.map(facility => ({
        ...facility,
        title: facility.name,
        details: facility.description,
        capacityInfo: facility.capacity,
        imageUrl: facility.image
      }));
    } catch (err) {
      console.error("Error fetching facilities:", err);
      throw new Error("Gagal memuat daftar fasilitas");
    }
  }
};