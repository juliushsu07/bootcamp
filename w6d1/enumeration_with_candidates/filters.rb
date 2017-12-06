# In this file we define the methods to help filter out candidates
# This way, we keep these methods separated from other potential parts of the program

def find(id)
  # Your code Here
  @candidates.select do | k, v |
    k[:id] == id
  end
end


def experienced?(candidate)
  # Your code Here
  if candidate[:years_of_experience] >= 2
    true
  else
    false
  end
end


def over_hundred_github_points?(candidate)
  if candidate[:github_points] >=100
    true
  else
    false
  end
end


def ruby_or_python?(candidate)
  candidate[:languages].include?'Ruby' || 'Python'
end


def date_applied?(candidate)
  if candidate[:date_applied] > 15.days.ago
    true
  else
    false
  end
end


def age_over_17?(candidate)
  if candidate[:age] > 17
    true
  else
    false
  end
end


def qualified_candidates(candidates)
  # Your code Here
  @candidates.select do | k, v |
    experienced?(candidate) &&
    over_hundred_github_points?(candidate) &&
    ruby_or_python?(candidate) &&
    age_over_17?(candidate) &&
    age?(candidate)
  end
end


def ordered_by_qualifications(candidates)
  final_list = candidates.sort_by do | candidate |
    [candidate[:years_of_experience], candidate[:github_points]]
  end
  final_list.reverse
end

