import com.amazonaws.regions.Regions;

import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProvider;
import com.amazonaws.services.cognitoidp.AWSCognitoIdentityProviderClientBuilder;
import com.amazonaws.services.cognitoidp.model.AdminCreateUserRequest;
import com.amazonaws.services.cognitoidp.model.AdminCreateUserResult;
import com.amazonaws.services.cognitoidp.model.AttributeType;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

import java.util.ArrayList;
import java.util.List;

public class CandidateCreator implements RequestHandler<NewUserParams, String>{

    public String handleRequest(NewUserParams userParams, Context context) {

        /* Validate user params */
        userParams.validate();

        /* Main action - create new user */
        AWSCognitoIdentityProvider cognito = AWSCognitoIdentityProviderClientBuilder
            .standard()
            .withRegion(Regions.US_EAST_1)
            .build();

        /* Create attributes - usertype, recruiter */
        AttributeType usertype = new AttributeType();
        usertype.setName("custom:usertype");
        usertype.setValue("2");
        AttributeType recruiter = new AttributeType();
        recruiter.setName("custom:recruiter");
        recruiter.setValue(userParams.getRecruiter());
        List<AttributeType> attributes = new ArrayList<AttributeType>();
        attributes.add(usertype);
        attributes.add(recruiter);

        /* Create request */
        AdminCreateUserRequest request = new AdminCreateUserRequest();
        request.setUsername(userParams.getUsername());
        request.setUserPoolId("us-east-1_HAV7sF97C");
        request.setUserAttributes(attributes);

        /* Make request */
        AdminCreateUserResult result = cognito.adminCreateUser(request);

        /* Return response */
        return "OK";
    }
}

class NewUserParams{

    private String username;
    private String recruiter;

    void validate(){
        if(username == null){
            throw new InvalidUserDataException("Invalid request body: 'username' property required");
        }
        if(recruiter == null){
            throw new InvalidUserDataException("Invalid request body: 'recruiter' property required");
        }
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setRecruiter(String recruiter){
        this.recruiter = recruiter;
    }

    public String getRecruiter(){
        return recruiter;
    }
    
    public class InvalidUserDataException extends RuntimeException{
        public InvalidUserDataException(String errorMessage){
            super(errorMessage);
        }
    }
}
