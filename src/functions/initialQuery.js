const initialQuery = { query: `query 
    InitialQuery($type: String, $family: String, $os: String){
        techs(type:$type, family:$family, os: $os){
            _id
            technologyName
            paths {
              _id
              pathName
              coreTechnology
              urlPath
              urlImage
              urlPathCertification
              cert
              courses {
                _id
                courseName
                urlImage
                urlCourse
                urlCertification
                platform
              }
            }
        }
        
        paths {
            _id
            pathName
            coreTechnology
            urlPath
            urlImage
            urlPathCertification
            cert
            courses {
              _id
              courseName
              urlImage
              urlRepository
              urlCourse
              urlInstructor
              urlCertification
              platform
            }
        }
    }`
}

export default initialQuery