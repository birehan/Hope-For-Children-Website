using AutoMapper;
using Application.Features.Staffs.DTOs;
using Domain;
using Application.Features.Accounts.DTOs;

namespace Application.Profiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {

            CreateMap<CreateStaffDto, Staff>().ReverseMap();
            CreateMap<UpdateStaffDto, Staff>().ReverseMap();
            CreateMap<Staff, StaffDto>()
            .ForMember(x => x.PhotoUrl, o => o.MapFrom(s => s.Photo.Url));



            CreateMap<UserAccountDto, AppUser>().ReverseMap();


        }
    }
}